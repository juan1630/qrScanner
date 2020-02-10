export class Registro {
    public format: string;
    public texto: string;
    public type: string;
    public icon: string;
    public create: Date;


    constructor ( format: string, text: string ) {
            this.format = format;
            this.texto = text
            this.create= new Date();
            this.determinarTipo();

    }


    private determinarTipo() {

        const inicioTexto = this.texto.substr(0,4);
        console.log( 'Tipo', inicioTexto );

        switch( inicioTexto ) {

            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
                
            case 'geo:':
                this.type = 'geo'
                this.icon = 'pin'
                break;
            default: 
                this.type = 'No reconocido';
                this.icon = 'create'
        }


    }

}