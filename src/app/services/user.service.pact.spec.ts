import {PactWeb, Matchers} from '@pact-foundation/pact-web';
import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {User} from '../models/User';

describe('UserService', () => {

    let provider: PactWeb;

    beforeAll(async () => {
      provider = new PactWeb({});

      await new Promise(resolve => setTimeout(resolve, 1000));
      await provider.removeInteractions();
    });

    afterAll(async () => {
      try {
        await provider.finalize();
      } catch (e) {
        console.log(JSON.stringify(e, undefined, 3));
      }
    });

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientModule ],
        providers: [ UserService ]
      });
    });

    afterEach(async () => {
      await provider.verify();
    });

    describe('get User', () => {

      const expectedUser: User = {
        id: 1,
        name: 'Lorenz'
      };

      beforeAll((done) => {
        provider.addInteraction({
          state: `user with id 1 exists`,
          uponReceiving: `a request to GET a user`,
          withRequest: {
            method: 'GET',
            path: `/api/users/${expectedUser.id}`
          },
          willRespondWith: {
            status: 200,
            body: Matchers.somethingLike(expectedUser)
          }
        }).then(done, done.fail);
      });

      it('should query for a user', (done) => {
        const userService: UserService = TestBed.inject(UserService);
        userService.get(expectedUser.id).subscribe({
          next: value => {
            expect(value).toEqual(expectedUser);
            done();
          },
          error: err => done.fail(err)
        });
      });

    });

});
