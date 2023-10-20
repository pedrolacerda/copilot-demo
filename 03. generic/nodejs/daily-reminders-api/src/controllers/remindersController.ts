import fs from 'fs';
import path from 'path';
import { IReminder } from '../types/reminder';

class RemindersController {
  private dataFilePath = path.resolve(__dirname, '../data/reminders.json');

  public getAllReminders(): IReminder[] {
    const data = fs.readFileSync(this.dataFilePath, 'utf-8');
    return JSON.parse(data);
  }

  public getReminderById(id: number): IReminder | null {
    const reminders = this.getAllReminders();
    return reminders.find(reminder => reminder.id === id) || null;
  }

  public createReminder(newReminder: IReminder): void {
    const reminders = this.getAllReminders();
    reminders.push(newReminder);
    fs.writeFileSync(this.dataFilePath, JSON.stringify(reminders, null, 2));
  }

  public updateReminder(updatedReminder: IReminder): void {
    let reminders = this.getAllReminders();
    reminders = reminders.map(reminder => 
      reminder.id === updatedReminder.id ? updatedReminder : reminder
    );
    fs.writeFileSync(this.dataFilePath, JSON.stringify(reminders, null, 2));
  }

  public deleteReminder(id: number): void {
    let reminders = this.getAllReminders();
    reminders = reminders.filter(reminder => reminder.id !== id);
    fs.writeFileSync(this.dataFilePath, JSON.stringify(reminders, null, 2));
  }
}

export default new RemindersController();