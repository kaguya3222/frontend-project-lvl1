install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

start:
	node bin/brain-games.js