import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({
    message: 'ð» My setup ð',
    setup: {
      pc: ['I3-1005G1 1.20ghz', '8gb ram ???', '256gb rom ssd'],
      os: 'Win11',
      devTools: {
        environment: 'wsl2 ubuntu20.04',
        ide: 'VSCode',
        terminal: 'https://tabby.sh',
        sh: ['fish', 'omf', 'starship'],
      },
      socialMedias: [
        'â https://github.com/kauefraga',
        'â¤ï¸ https://github.com/anacarolina4',
        'â https://twitter.com/@__kauefraga',
        'â¤ï¸ https://twitter.com/@Ana___Carolina2',
      ]
    },
    author: 'KauÃª Fraga Rodrigues <kauefragarodrigues456@gmail.com>'
  })
}
