import Chai from 'chai';
import {
    applicationError,
    applicationErrorCode,
} from '../../../../src/domain/enums/ErrorEnum.js';

describe('domain :: enums :: ErrorEnum', () => {
    describe('Get All applicationError Values', () => {
        it('returns correctly applicationError Values', () => {
            Chai.expect(applicationError.values()).to.be.eqls([
                'business',
                'notFound',
                'contract',
                'integration',
                'operation',
            ]);
        });
    });

    describe('Get All applicationError Keys', () => {
        it('returns correctly applicationError Keys', () => {
            Chai.expect(applicationError.keys()).to.be.eqls([
                'BUSINESS',
                'NOT_FOUND',
                'CONTRACT',
                'INTEGRATION',
                'OPERATION',
            ]);
        });
    });

    describe('Get All applicationErrorCode Values', () => {
        it('returns correctly applicationErrorCode Values', () => {
            Chai.expect(applicationErrorCode.values()).to.be.eqls([
                'business',
                'contract',
                'notFound',
                'business',
                'operation',
                'integration',
            ]);
        });
    });

    describe('Get All applicationErrorCode Keys', () => {
        it('returns correctly applicationErrorCode Keys', () => {
            Chai.expect(applicationErrorCode.keys()).to.be.eqls([
                '116',
                '400',
                '404',
                '422',
                '500',
                '504',
            ]);
        });
    });
});
