import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Almoxarifado',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '2804',
  database: 'almoxarifado'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AlmoxarifadoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Almoxarifado';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Almoxarifado', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
