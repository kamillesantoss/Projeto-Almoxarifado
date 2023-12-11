import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'descricao_material'}
  }
})
export class DescricaoMaterial extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    id: 1,
    postgresql: {columnName: 'cod_material', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codMaterial: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 45,
    generated:  false,
    postgresql: {columnName: 'cor', dataType: 'character varying', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  cor?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 45,
    generated:  false,
    postgresql: {columnName: 'marca', dataType: 'character varying', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  marca?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 45,
    generated:  false,
    postgresql: {columnName: 'tamanho', dataType: 'character varying', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  tamanho?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 45,
    generated:  false,
    postgresql: {columnName: 'composicao', dataType: 'character varying', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  composicao?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DescricaoMaterial>) {
    super(data);
  }
}

export interface DescricaoMaterialRelations {
  // describe navigational properties here
}

export type DescricaoMaterialWithRelations = DescricaoMaterial & DescricaoMaterialRelations;
