import express from 'express';
import { RemindersController } from '../controllers/remindersController';

export function setRoutes(app: express.Application) {
    const controller = new RemindersController();

    app.get('/reminders', (req, res) => {
        res.send(controller.getAllReminders());
    });

    app.get('/reminders/:id', (req, res) => {
        const id = parseInt(req.params.id);
        res.send(controller.getReminderById(id));
    });

    app.post('/reminders', (req, res) => {
        const newReminder = controller.createReminder(req.body);
        res.send(newReminder);
    });

    app.put('/reminders/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const updatedReminder = controller.updateReminder(id, req.body);
        res.send(updatedReminder);
    });

    app.delete('/reminders/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const deleted = controller.deleteReminder(id);
        res.send({ deleted });
    });
}