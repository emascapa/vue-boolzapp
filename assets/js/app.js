const app = new Vue(
    {
        el: '#app',
        data: {
            //counter element
            contacts_counter: null,
            //contacts array
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                    ],
                }
            ],

            //dynamic input chat string
            userChat: '',

            //dynamic input search user string
            searchUser: '',

            responseCounter: 0,
        },

        methods: {
            //method to select a chat
            clickContact(index) {
                this.contacts_counter = index;

                //console.log(this.contacts);
                //console.log(this.contacts_counter);


                //QUESTO L'HO LEVATO PK PER VISUALIZZARE L'ORA DEL MESSAGIO INVOCO LA FUNZIONE DIRETTAMENTE DALL'HTML {{}}

              /*   this.contacts[this.contacts_counter].messages.forEach(element => {
                    const formattedHour = this.getHourFromDate(element.date);
                    //console.log(formattedHour);
                    element.hour = formattedHour;
                }); */

                //setTimeout(() => {this.scrollChatDivToBottom()},2000)
                
                Vue.nextTick(() => {this.scrollChatDivToBottom()});
                
            },

            //scroll chat to the bottom 
            scrollChatDivToBottom() {

                const chatDiv = document.querySelector('.chat_div');
                chatDiv.scrollTop = chatDiv.scrollHeight - chatDiv.clientHeight;
                 
            },

            //method to get the date
            getDateAsWeLike() {
                return `${new Date().getDate()}/${(new Date().getMonth())+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            },

            //method for writing a message in chat
            writeMessageAndResponse() {
                if (this.userChat.replace(/\s+/g, '') !== '') {

                const newMessageString = this.userChat;

                //const dateMessage = `${new Date().getDate()}/${(new Date().getMonth())+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                const dateMessage = this.getDateAsWeLike();
                console.log(dateMessage);

                //QUIIIIII
                const formattedHour = this.getHourFromDate(dateMessage);
                //console.log(formattedHour);

                const newMessage = {
                    //QUIIII
                    //hour: formattedHour,
                    date: dateMessage,
                    message: newMessageString,
                    status: 'sent'
                }

                this.contacts[this.contacts_counter].messages.push(newMessage);

                this.userChat = '';

                Vue.nextTick(() => {this.scrollChatDivToBottom()});

                setTimeout(this.instantResponse, 1000)

                } else {
                    this.userChat = '';
                }
            },

            //method for instant response after message
            instantResponse() {

                //const dateMessage = `${new Date().getDate()}/${(new Date().getMonth())+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                const dateMessage = this.getDateAsWeLike();
                //QUIIIIIII
                //const formattedHour = this.getHourFromDate(dateMessage);

                let responseMessage;

                if (this.responseCounter === 0) {
                    responseMessage = 'ok';
                    this.responseCounter++
                } else if (this.responseCounter === 1) {
                    responseMessage = 'va beneeeee';
                    this.responseCounter++
                } else if (this.responseCounter === 2) {
                    responseMessage = 'HO CAPITO';
                    this.responseCounter++
                } else {
                    responseMessage = 'LA VUOI FINIRE?????';
                    this.responseCounter = 0;
                }

                const newMessageReceived = {
                    //QUIIIII
                    //hour: formattedHour,
                    date: dateMessage,
                    message: responseMessage,
                    status: 'received'
                }

                this.contacts[this.contacts_counter].messages.push(newMessageReceived);

                Vue.nextTick(() => {this.scrollChatDivToBottom()});

            },

            //method to extract the hour from the date string
            getHourFromDate(dateString) {

                let hourNow = dateString.split(' ')[1].split(':')[0];
                let minutesNow = dateString.split(' ')[1].split(':')[1];

                if (parseInt(hourNow) < 10) {
                    hourNow = '0' + hourNow
                }
                if (parseInt(minutesNow) < 10) {
                    minutesNow = '0' + minutesNow
                }

                return `${hourNow}:${minutesNow}`
            },

            //method to search user
            searchUserMethod() {
                //const searched = this.searchUser;

                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().includes(this.searchUser.toLowerCase())) {
                        element.visible = true;

                        //console.log('uno trovato');
                    } else {
                        element.visible = false; 
                        //console.log('no mi disp');
                    }
                })
            },

            //method for erasing messages 
            eraseMessage(index) {
                this.contacts[this.contacts_counter].messages.splice(index,1);

                console.log(`Lunghezza array messaggi adesso: ${this.contacts[this.contacts_counter].messages.length}`);
            }
        },

    }
)

