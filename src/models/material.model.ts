import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'material'}}
})
export class Material extends Entity {
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
    length: 45,
    generated:  false,
    postgresql: {columnName: 'nome', dataType: 'character varying', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    postgresql: {columnName: 'codigo_categoria', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigoCategoria: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Material>) {
    super(data);
  }
}

export interface MaterialRelations {
  // describe navigational properties here
}

export type MaterialWithRelations = Material & MaterialRelations;
