module.exports = ec => {
    return {
        markdownTemplateEngine: 'hbs',
        passthroughFileCopy: true,

        dir: {
            output: 'output',
            data: 'data'
        }
    }
}