import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Download, Eye, Layers, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

export interface Column<T> {
  key: string;
  header: string;
  accessor: (item: T) => React.ReactNode;
  sortable?: boolean;
  searchable?: boolean;
  sortAccessor?: (item: T) => string | number;
}

export interface DataGridProps<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  subtitle?: string;
  onRowClick?: (item: T) => void;
  bulkActions?: { label: string; action: (selectedIds: string[]) => void; variant?: 'primary' | 'danger' | 'secondary' }[];
  searchPlaceholder?: string;
  loading?: boolean;
  exportFileName?: string;
  headerAction?: React.ReactNode;
}

export function DataGrid<T extends { id: string }>({
  columns,
  data,
  title,
  subtitle,
  onRowClick,
  bulkActions = [],
  searchPlaceholder = 'Search records...',
  loading = false,
  exportFileName = 'erpcore-export',
  headerAction
}: DataGridProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map((c) => c.key));
  const [showColMenu, setShowColMenu] = useState(false);

  // Search Filter
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    const term = searchTerm.toLowerCase();
    return data.filter((item) => {
      return columns.some((col) => {
        if (col.searchable === false) return false;
        const val = col.sortAccessor ? col.sortAccessor(item) : col.accessor(item);
        return String(val ?? '').toLowerCase().includes(term);
      });
    });
  }, [data, searchTerm, columns]);

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return filteredData;

    return [...filteredData].sort((a, b) => {
      const valA = col.sortAccessor ? col.sortAccessor(a) : (a as any)[sortKey];
      const valB = col.sortAccessor ? col.sortAccessor(b) : (b as any)[sortKey];

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortDirection, columns]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      if (sortDirection === 'asc') setSortDirection('desc');
      else {
        setSortKey(null);
        setSortDirection('asc');
      }
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(paginatedData.map((d) => d.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleExportCSV = () => {
    if (data.length === 0) return;
    const headers = columns.filter((c) => visibleColumns.includes(c.key)).map((c) => `"${c.header}"`).join(',');
    const rows = sortedData.map((item) => {
      return columns
        .filter((c) => visibleColumns.includes(c.key))
        .map((c) => {
          const val = c.sortAccessor ? c.sortAccessor(item) : (item as any)[c.key];
          return `"${String(val ?? '').replace(/"/g, '""')}"`;
        })
        .join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${exportFileName}-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleColumn = (key: string) => {
    if (visibleColumns.includes(key)) {
      if (visibleColumns.length > 1) {
        setVisibleColumns(visibleColumns.filter((k) => k !== key));
      }
    } else {
      setVisibleColumns([...visibleColumns, key]);
    }
  };

  return (
    <div className="glass-panel rounded-xl shadow-lg border border-gray-800 flex flex-col overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-4 border-b border-gray-800 bg-gray-900/40 flex flex-wrap items-center justify-between gap-4">
        <div>
          {title && <h3 className="text-lg font-semibold text-gray-100">{title}</h3>}
          {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search Bar */}
          <div className="w-64">
            <Input
              placeholder={searchPlaceholder}
              icon={<Search className="w-4 h-4" />}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Bulk Actions */}
          {selectedIds.length > 0 && bulkActions.map((ba, i) => (
            <Button
              key={i}
              size="sm"
              variant={ba.variant || 'secondary'}
              onClick={() => ba.action(selectedIds)}
            >
              {ba.label} ({selectedIds.length})
            </Button>
          ))}

          {/* Column Toggle Menu */}
          <div className="relative">
            <Button
              size="sm"
              variant="outline"
              icon={<Eye className="w-3.5 h-3.5" />}
              onClick={() => setShowColMenu(!showColMenu)}
            >
              Columns
            </Button>
            {showColMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-2 z-30">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 py-1">Toggle Columns</p>
                {columns.map((col) => (
                  <label key={col.key} className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-200 hover:bg-gray-800 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      checked={visibleColumns.includes(col.key)}
                      onChange={() => toggleColumn(col.key)}
                      className="rounded bg-gray-900 border-gray-700 text-blue-500 focus:ring-0"
                    />
                    <span>{col.header}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Export CSV */}
          <Button
            size="sm"
            variant="outline"
            icon={<Download className="w-3.5 h-3.5" />}
            onClick={handleExportCSV}
          >
            Export CSV
          </Button>

          {headerAction}
        </div>
      </div>

      {/* Table Body */}
      <div className="overflow-x-auto min-h-[300px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 text-gray-400 gap-3">
            <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
            <p className="text-sm">Loading records from IndexedDB local storage...</p>
          </div>
        ) : paginatedData.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-gray-400 gap-2">
            <Layers className="w-10 h-10 text-gray-600 mb-1" />
            <p className="text-base font-semibold text-gray-300">No records found</p>
            <p className="text-xs text-gray-500">Try adjusting search term or filters</p>
          </div>
        ) : (
          <table className="erp-table">
            <thead>
              <tr>
                <th className="w-10 text-center">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={paginatedData.length > 0 && selectedIds.length === paginatedData.length}
                    className="rounded bg-gray-900 border-gray-700 text-blue-500 focus:ring-0 cursor-pointer"
                  />
                </th>
                {columns
                  .filter((c) => visibleColumns.includes(c.key))
                  .map((col) => (
                    <th
                      key={col.key}
                      className={col.sortable !== false ? 'cursor-pointer select-none hover:text-gray-100' : ''}
                      onClick={() => col.sortable !== false && handleSort(col.key)}
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{col.header}</span>
                        {col.sortable !== false && sortKey === col.key && (
                          sortDirection === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-blue-400" /> : <ChevronDown className="w-3.5 h-3.5 text-blue-400" />
                        )}
                      </div>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <tr
                    key={item.id}
                    onClick={() => onRowClick && onRowClick(item)}
                    className={`transition-colors ${onRowClick ? 'cursor-pointer hover:bg-gray-800/80' : ''} ${isSelected ? 'bg-blue-950/20' : ''}`}
                  >
                    <td className="w-10 text-center" onClick={(e) => handleSelectOne(item.id, e)}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="rounded bg-gray-900 border-gray-700 text-blue-500 focus:ring-0 cursor-pointer"
                      />
                    </td>
                    {columns
                      .filter((c) => visibleColumns.includes(c.key))
                      .map((col) => (
                        <td key={col.key}>{col.accessor(item)}</td>
                      ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Table Footer Pagination */}
      <div className="p-4 border-t border-gray-800 bg-gray-900/40 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
        <div>
          Showing {sortedData.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} to{' '}
          {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} records
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Per page:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-gray-900 border border-gray-700 text-gray-200 text-xs rounded px-2 py-1 focus:outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </Button>
            <span className="px-2 font-medium text-gray-200">
              {currentPage} / {totalPages}
            </span>
            <Button
              size="sm"
              variant="outline"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
