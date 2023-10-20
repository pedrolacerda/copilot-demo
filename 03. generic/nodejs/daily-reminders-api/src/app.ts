import express from 'express';
import { setRoutes } from './routes/remindersRoutes';

const app = express();
const port = 3000;

app.use(express.json());

setRoutes(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app;