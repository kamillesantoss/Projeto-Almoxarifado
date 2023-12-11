import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'material_estoque_cliente'}
  }
})
export class MaterialEstoqueCliente extends Entity {
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
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    id: 2,
    postgresql: {columnName: 'cod_estoque_cliente', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codEstoqueCliente: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    postgresql: {columnName: 'quantidade', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  quantidade: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MaterialEstoqueCliente>) {
    super(data);
  }
}

export interface MaterialEstoqueClienteRelations {
  // describe navigational properties here
}

export type MaterialEstoqueClienteWithRelations = MaterialEstoqueCliente & MaterialEstoqueClienteRelations;
