import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'adm_dpa'}}
})
export class AdmDpa extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    id: 1,
    postgresql: {columnName: 'codigo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigo: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 90,
    generated:  false,
    postgresql: {columnName: 'nome', dataType: 'character varying', dataLength: 90, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 45,
    generated:  false,
    postgresql: {columnName: 'login', dataType: 'character varying', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  login: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 45,
    generated:  false,
    postgresql: {columnName: 'senha', dataType: 'character varying', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  senha: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    postgresql: {columnName: 'codigo_estoque_dpa', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigoEstoqueDpa: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AdmDpa>) {
    super(data);
  }
}

export interface AdmDpaRelations {
  // describe navigational properties here
}

export type AdmDpaWithRelations = AdmDpa & AdmDpaRelations;
