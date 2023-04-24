module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Generator to generate a ts react component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Provide a component name'
        }],
        actions:[{
            type: 'addMany',
            destination: 'src/components/{{name}}',
            templateFiles: 'plop-templates/component/*.hbs',
            base: 'plop-templates/component'
        }]
    })

    plop.setGenerator('section', {
        description: 'Generator to generate a ts react component for a section',
        prompts:[{
            type: 'input',
            name: 'name',
            message: 'provide a section name',
        }],
        actions:[{
            type: 'addMany',
            destination: 'src/sections/{{name}}',
            templateFiles: 'plop-templates/component/*.hbs',
            base: 'plop-templates/component'
        }]
    })
}