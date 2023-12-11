import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {EstoqueCliente} from '../models';
import {EstoqueClienteRepository} from '../repositories';

export class EstoqueClienteController {
  constructor(
    @repository(EstoqueClienteRepository)
    public estoqueClienteRepository : EstoqueClienteRepository,
  ) {}

  @post('/estoque-clientes')
  @response(200, {
    description: 'EstoqueCliente model instance',
    content: {'application/json': {schema: getModelSchemaRef(EstoqueCliente)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstoqueCliente, {
            title: 'NewEstoqueCliente',
            
          }),
        },
      },
    })
    estoqueCliente: EstoqueCliente,
  ): Promise<EstoqueCliente> {
    return this.estoqueClienteRepository.create(estoqueCliente);
  }

  @get('/estoque-clientes/count')
  @response(200, {
    description: 'EstoqueCliente model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EstoqueCliente) where?: Where<EstoqueCliente>,
  ): Promise<Count> {
    return this.estoqueClienteRepository.count(where);
  }

  @get('/estoque-clientes')
  @response(200, {
    description: 'Array of EstoqueCliente model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EstoqueCliente, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EstoqueCliente) filter?: Filter<EstoqueCliente>,
  ): Promise<EstoqueCliente[]> {
    return this.estoqueClienteRepository.find(filter);
  }

  @patch('/estoque-clientes')
  @response(200, {
    description: 'EstoqueCliente PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstoqueCliente, {partial: true}),
        },
      },
    })
    estoqueCliente: EstoqueCliente,
    @param.where(EstoqueCliente) where?: Where<EstoqueCliente>,
  ): Promise<Count> {
    return this.estoqueClienteRepository.updateAll(estoqueCliente, where);
  }

  @get('/estoque-clientes/{id}')
  @response(200, {
    description: 'EstoqueCliente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EstoqueCliente, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EstoqueCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<EstoqueCliente>
  ): Promise<EstoqueCliente> {
    return this.estoqueClienteRepository.findById(id, filter);
  }

  @patch('/estoque-clientes/{id}')
  @response(204, {
    description: 'EstoqueCliente PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstoqueCliente, {partial: true}),
        },
      },
    })
    estoqueCliente: EstoqueCliente,
  ): Promise<void> {
    await this.estoqueClienteRepository.updateById(id, estoqueCliente);
  }

  @put('/estoque-clientes/{id}')
  @response(204, {
    description: 'EstoqueCliente PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estoqueCliente: EstoqueCliente,
  ): Promise<void> {
    await this.estoqueClienteRepository.replaceById(id, estoqueCliente);
  }

  @del('/estoque-clientes/{id}')
  @response(204, {
    description: 'EstoqueCliente DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estoqueClienteRepository.deleteById(id);
  }
}
