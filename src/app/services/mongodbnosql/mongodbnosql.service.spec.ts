import { TestBed } from '@angular/core/testing';

import { MongoDBNoSqlService } from './mongodbnosql.service';

describe('Mongodbnosql.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongoDBNoSqlService = TestBed.get(MongoDBNoSqlService);
    expect(service).toBeTruthy();
  });
});
