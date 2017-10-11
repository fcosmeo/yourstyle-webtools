export class Person {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public dni: string,
    public birth_date: Date,
    public email: string,
    public cell_phone: string,
    public status_id: number,
    public registration_date: Date,
    public modification_date: Date,
    public send_mail: number
  ) {}
}
