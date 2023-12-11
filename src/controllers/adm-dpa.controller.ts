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
import {AdmDpa} from '../models';
import {AdmDpaRepository} from '../repositories';

export class AdmDpaController {
  constructor(
    @repository(AdmDpaRepository)
    public admDpaRepository : AdmDpaRepository,
  ) {}

  @post('/adm-dpas')
  @response(200, {
    description: 'AdmDpa model instance',
    content: {'application/json': {schema: getModelSchemaRef(AdmDpa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdmDpa, {
            title: 'NewAdmDpa',
            
          }),
        },
      },
    })
    admDpa: AdmDpa,
  ): Promise<AdmDpa> {
    return this.admDpaRepository.create(admDpa);
  }

  @get('/adm-dpas/count')
  @response(200, {
    description: 'AdmDpa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AdmDpa) where?: Where<AdmDpa>,
  ): Promise<Count> {
    return this.admDpaRepository.count(where);
  }

  @get('/adm-dpas')
  @response(200, {
    description: 'Array of AdmDpa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AdmDpa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AdmDpa) filter?: Filter<AdmDpa>,
  ): Promise<AdmDpa[]> {
    return this.admDpaRepository.find(filter);
  }

  @patch('/adm-dpas')
  @response(200, {
    description: 'AdmDpa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdmDpa, {partial: true}),
        },
      },
    })
    admDpa: AdmDpa,
    @param.where(AdmDpa) where?: Where<AdmDpa>,
  ): Promise<Count> {
    return this.admDpaRepository.updateAll(admDpa, where);
  }

  @get('/adm-dpas/{id}')
  @response(200, {
    description: 'AdmDpa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AdmDpa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AdmDpa, {exclude: 'where'}) filter?: FilterExcludingWhere<AdmDpa>
  ): Promise<AdmDpa> {
    return this.admDpaRepository.findById(id, filter);
  }

  @patch('/adm-dpas/{id}')
  @response(204, {
    description: 'AdmDpa PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdmDpa, {partial: true}),
        },
      },
    })
    admDpa: AdmDpa,
  ): Promise<void> {
    await this.admDpaRepository.updateById(id, admDpa);
  }

  @put('/adm-dpas/{id}')
  @response(204, {
    description: 'AdmDpa PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() admDpa: AdmDpa,
  ): Promise<void> {
    await this.admDpaRepository.replaceById(id, admDpa);
  }

  @del('/adm-dpas/{id}')
  @response(204, {
    description: 'AdmDpa DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.admDpaRepository.deleteById(id);
  }
}
