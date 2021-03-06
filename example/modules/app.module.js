import { Module, Hooks } from '../../dist/decorator';
import GeneralController from '../controllers/general.controller';
import ErrorController from '../controllers/error.controller';
import InterceptorController from '../controllers/interceptor.controller';
import UploadController from '../controllers/upload.controller';
import MiddlewareController from '../controllers/middleware.controller';

const helloHook = () => {
  console.log('Hello hook');
};

export default
@Hooks(helloHook)
@Module({
  controllers: [
    GeneralController,
    ErrorController,
    InterceptorController,
    UploadController,
    MiddlewareController,
  ],
})
class AppModule {}
