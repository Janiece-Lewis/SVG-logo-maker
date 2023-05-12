const questions = [
    {
      type: 'input',
      message: 'What text do you want on your logo? Please stay within 3 characters',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What text color do you want?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape do you want your logo?',
      choices: ['circle','square','triangle'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'What color do you want your shape?',
      name: 'shapeColor',
    },
]
   