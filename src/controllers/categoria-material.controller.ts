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
import {CategoriaMaterial} from '../models';
import {CategoriaMaterialRepository} from '../repositories';

export class CategoriaMaterialController {
  constructor(
    @repository(CategoriaMaterialRepository)
    public categoriaMaterialRepository : CategoriaMaterialRepository,
  ) {}

  @post('/categoria-materials')
  @response(200, {
    description: 'CategoriaMaterial model instance',
    content: {'application/json': {schema: getModelSchemaRef(CategoriaMaterial)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaMaterial, {
            title: 'NewCategoriaMaterial',
            
          }),
        },
      },
    })
    categoriaMaterial: CategoriaMaterial,
  ): Promise<CategoriaMaterial> {
    return this.categoriaMaterialRepository.create(categoriaMaterial);
  }

  @get('/categoria-materials/count')
  @response(200, {
    description: 'CategoriaMaterial model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CategoriaMaterial) where?: Where<CategoriaMaterial>,
  ): Promise<Count> {
    return this.categoriaMaterialRepository.count(where);
  }

  @get('/categoria-materials')
  @response(200, {
    description: 'Array of CategoriaMaterial model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CategoriaMaterial, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CategoriaMaterial) filter?: Filter<CategoriaMaterial>,
  ): Promise<CategoriaMaterial[]> {
    return this.categoriaMaterialRepository.find(filter);
  }

  @patch('/categoria-materials')
  @response(200, {
    description: 'CategoriaMaterial PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaMaterial, {partial: true}),
        },
      },
    })
    categoriaMaterial: CategoriaMaterial,
    @param.where(CategoriaMaterial) where?: Where<CategoriaMaterial>,
  ): Promise<Count> {
    return this.categoriaMaterialRepository.updateAll(categoriaMaterial, where);
  }

  @get('/categoria-materials/{id}')
  @response(200, {
    description: 'CategoriaMaterial model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CategoriaMaterial, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CategoriaMaterial, {exclude: 'where'}) filter?: FilterExcludingWhere<CategoriaMaterial>
  ): Promise<CategoriaMaterial> {
    return this.categoriaMaterialRepository.findById(id, filter);
  }

  @patch('/categoria-materials/{id}')
  @response(204, {
    description: 'CategoriaMaterial PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriaMaterial, {partial: true}),
        },
      },
    })
    categoriaMaterial: CategoriaMaterial,
  ): Promise<void> {
    await this.categoriaMaterialRepository.updateById(id, categoriaMaterial);
  }

  @put('/categoria-materials/{id}')
  @response(204, {
    description: 'CategoriaMaterial PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() categoriaMaterial: CategoriaMaterial,
  ): Promise<void> {
    await this.categoriaMaterialRepository.replaceById(id, categoriaMaterial);
  }

  @del('/categoria-materials/{id}')
  @response(204, {
    description: 'CategoriaMaterial DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.categoriaMaterialRepository.deleteById(id);
  }
}
