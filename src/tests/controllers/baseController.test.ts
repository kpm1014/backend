import { BaseController } from '../../controllers/baseController';
import { BaseService } from '../../services/swapi/baseService';
import { PaginatedResponse } from '../../models';

describe('BaseController', () => {
    let controller: BaseController;
    let mockService: jest.Mocked<BaseService>;

    beforeEach(() => {
        mockService = {
            getAll: jest.fn(),
            getById: jest.fn(),
            search: jest.fn(),
            getSchema: jest.fn()
        } as any;

        controller = new class extends BaseController {
            constructor() {
                super(mockService);
            }
        }();
    });

    test('getAll should return success response', async () => {
        const mockData: PaginatedResponse<unknown> = {
            count: 0,
            next: null,
            previous: null,
            results: []
        };
        
        mockService.getAll.mockResolvedValue(mockData);

        const result = await controller.getAll();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body)).toEqual({
            exito: true,
            datos: mockData
        });
    });
});
