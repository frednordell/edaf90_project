export class ContactRequest {
    personalData: PersonalData;
    requestType: any = '';
    text: string = '';
}

export class PersonalData {
    name: string = '';
    errend: string = '';
    email: string = '';
}