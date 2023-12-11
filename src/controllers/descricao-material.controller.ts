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
import {DescricaoMaterial} from '../models';
import {DescricaoMaterialRepository} from '../repositories';

export class DescricaoMaterialController {
  constructor(
    @repository(DescricaoMaterialRepository)
    public descricaoMaterialRepository : DescricaoMaterialRepository,
  ) {}

  @post('/descricao-materials')
  @response(200, {
    description: 'DescricaoMaterial model instance',
    content: {'application/json': {schema: getModelSchemaRef(DescricaoMaterial)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DescricaoMaterial, {
            title: 'NewDescricaoMaterial',
            
          }),
        },
      },
    })
    descricaoMaterial: DescricaoMaterial,
  ): Promise<DescricaoMaterial> {
    return this.descricaoMaterialRepository.create(descricaoMaterial);
  }

  @get('/descricao-materials/count')
  @response(200, {
    description: 'DescricaoMaterial model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DescricaoMaterial) where?: Where<DescricaoMaterial>,
  ): Promise<Count> {
    return this.descricaoMaterialRepository.count(where);
  }

  @get('/descricao-materials')
  @response(200, {
    description: 'Array of DescricaoMaterial model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DescricaoMaterial, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DescricaoMaterial) filter?: Filter<DescricaoMaterial>,
  ): Promise<DescricaoMaterial[]> {
    return this.descricaoMaterialRepository.find(filter);
  }

  @patch('/descricao-materials')
  @response(200, {
    description: 'DescricaoMaterial PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DescricaoMaterial, {partial: true}),
        },
      },
    })
    descricaoMaterial: DescricaoMaterial,
    @param.where(DescricaoMaterial) where?: Where<DescricaoMaterial>,
  ): Promise<Count> {
    return this.descricaoMaterialRepository.updateAll(descricaoMaterial, where);
  }

  @get('/descricao-materials/{id}')
  @response(200, {
    description: 'DescricaoMaterial model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DescricaoMaterial, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DescricaoMaterial, {exclude: 'where'}) filter?: FilterExcludingWhere<DescricaoMaterial>
  ): Promise<DescricaoMaterial> {
    return this.descricaoMaterialRepository.findById(id, filter);
  }

  @patch('/descricao-materials/{id}')
  @response(204, {
    description: 'DescricaoMaterial PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DescricaoMaterial, {partial: true}),
        },
      },
    })
    descricaoMaterial: DescricaoMaterial,
  ): Promise<void> {
    await this.descricaoMaterialRepository.updateById(id, descricaoMaterial);
  }

  @put('/descricao-materials/{id}')
  @response(204, {
    description: 'DescricaoMaterial PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() descricaoMaterial: DescricaoMaterial,
  ): Promise<void> {
    await this.descricaoMaterialRepository.replaceById(id, descricaoMaterial);
  }

  @del('/descricao-materials/{id}')
  @response(204, {
    description: 'DescricaoMaterial DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.descricaoMaterialRepository.deleteById(id);
  }
}
