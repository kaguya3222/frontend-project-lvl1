install:
	npm ci

publish:
	npm publish --dry-run

start:
	node bin/brain-games.js