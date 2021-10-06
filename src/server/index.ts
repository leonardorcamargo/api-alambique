import { createExpressServer } from 'routing-controllers';
import { UserController } from '../controllers';

export class Server {
  private app: any;

  private port: number;

  constructor(port: string) {
    this.port = Number(port);
    this.app = createExpressServer({
      controllers: [UserController],
    });
  }

  async start(): Promise<void> {
    this.app.listen(this.port, () => {
      console.info(`Api rodando na porta ${this.port}!🚀`);
    });
  }
}
