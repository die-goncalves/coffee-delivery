import { createServer, Model } from 'miragejs'

export default function () {
  createServer({
    models: {
      coffee: Model
    },

    routes() {
      this.namespace = 'api'
      this.timing = 1000

      this.get('/stock', (schema, request) => {
        const response = schema.coffees.all()
        return { data: response.models }
      })

      this.get('/stock/:id', (schema, request) => {
        const id = request.params.id
        const response = schema.coffees.find(id)
        return { data: response.attrs }
      })
    },

    seeds(server) {
      server.create('coffee', {
        id: '1',
        image: '../images-fake-api/Type=Expresso.png',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        tags: ['Tradicional'],
        price: 9.9,
        stock: 7
      })
      server.create('coffee', {
        id: '2',
        image: '../images-fake-api/Type=Americano.png',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        tags: ['Tradicional'],
        price: 2,
        stock: 5
      })
      server.create('coffee', {
        id: '3',
        image: '../images-fake-api/Type=Expresso Cremoso.png',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        tags: ['Tradicional'],
        price: 10,
        stock: 12
      })
      server.create('coffee', {
        id: '4',
        image: '../images-fake-api/Type=Café Gelado.png',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        tags: ['Tradicional', 'Gelado', 'Alcoólico', 'Especial'],
        price: 7.5,
        stock: 17
      })
      server.create('coffee', {
        id: '5',
        image: '../images-fake-api/Type=Café com Leite.png',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        tags: ['Tradicional', 'Com leite'],
        price: 5.5,
        stock: 10
      })
    }
  })
}
