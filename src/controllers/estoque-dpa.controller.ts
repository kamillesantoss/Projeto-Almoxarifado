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
import {EstoqueDpa} from '../models';
import {EstoqueDpaRepository} from '../repositories';

export class EstoqueDpaController {
  constructor(
    @repository(EstoqueDpaRepository)
    public estoqueDpaRepository : EstoqueDpaRepository,
  ) {}

  @post('/estoque-dpas')
  @response(200, {
    description: 'EstoqueDpa model instance',
    content: {'application/json': {schema: getModelSchemaRef(EstoqueDpa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstoqueDpa, {
            title: 'NewEstoqueDpa',
            
          }),
        },
      },
    })
    estoqueDpa: EstoqueDpa,
  ): Promise<EstoqueDpa> {
    return this.estoqueDpaRepository.create(estoqueDpa);
  }

  @get('/estoque-dpas/count')
  @response(200, {
    description: 'EstoqueDpa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EstoqueDpa) where?: Where<EstoqueDpa>,
  ): Promise<Count> {
    return this.estoqueDpaRepository.count(where);
  }

  @get('/estoque-dpas')
  @response(200, {
    description: 'Array of EstoqueDpa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EstoqueDpa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EstoqueDpa) filter?: Filter<EstoqueDpa>,
  ): Promise<EstoqueDpa[]> {
    return this.estoqueDpaRepository.find(filter);
  }

  @patch('/estoque-dpas')
  @response(200, {
    description: 'EstoqueDpa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstoqueDpa, {partial: true}),
        },
      },
    })
    estoqueDpa: EstoqueDpa,
    @param.where(EstoqueDpa) where?: Where<EstoqueDpa>,
  ): Promise<Count> {
    return this.estoqueDpaRepository.updateAll(estoqueDpa, where);
  }

  @get('/estoque-dpas/{id}')
  @response(200, {
    description: 'EstoqueDpa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EstoqueDpa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EstoqueDpa, {exclude: 'where'}) filter?: FilterExcludingWhere<EstoqueDpa>
  ): Promise<EstoqueDpa> {
    return this.estoqueDpaRepository.findById(id, filter);
  }

  @patch('/estoque-dpas/{id}')
  @response(204, {
    description: 'EstoqueDpa PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstoqueDpa, {partial: true}),
        },
      },
    })
    estoqueDpa: EstoqueDpa,
  ): Promise<void> {
    await this.estoqueDpaRepository.updateById(id, estoqueDpa);
  }

  @put('/estoque-dpas/{id}')
  @response(204, {
    description: 'EstoqueDpa PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estoqueDpa: EstoqueDpa,
  ): Promise<void> {
    await this.estoqueDpaRepository.replaceById(id, estoqueDpa);
  }

  @del('/estoque-dpas/{id}')
  @response(204, {
    description: 'EstoqueDpa DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estoqueDpaRepository.deleteById(id);
  }
}
