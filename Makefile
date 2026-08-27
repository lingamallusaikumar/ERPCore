.PHONY: install dev build start test clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

test:
	npm run test

clean:
	rm -rf dist node_modules
