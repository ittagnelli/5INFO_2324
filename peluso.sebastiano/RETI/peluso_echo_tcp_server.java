import java.net.*;
import java.io.*;
import java.util.Date;

public class tcp_server {
    public static void main(String[] args) {
        ServerSocket server_socket;
        Socket client_socket;
        
        /* Verifico la presenza del parametro porta e lo leggo*/ 
        if (args.length != 1) {
            System.out.println("uso: tcp_server <PORT>");
            return;
        }
        int port = Integer.parseInt(args[0]);
        
        try {
            /* creo il socket */
            server_socket = new ServerSocket(port);
            System.out.println("Server TCP pronto e in ascolto sulla porta  " + port  + "\n");    
            while(true) {
                /* rimango in attesa fino a quando arriva una richiesta da un client */
                client_socket = server_socket.accept();

                /* gestisco la connessione e leggo il messaggio */   
                InputStream input = client_socket.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(input));
                String messaggio = reader.readLine();




                System.out.format("Java TCP server ha ricevuto %d byte: %s\n", messaggio.length(), messaggio);

                OutputStream output = client_socket.getOutputStream();
                PrintWriter writer = new PrintWriter(output, true);
                writer.println(messaggio);

                System.out.format("Echo server :  %s\n", messaggio);



                /* chiudo la connessione con il client */
                client_socket.close();
            }
        }
        catch (IOException e) {
            System.err.println(e);
        }
    }
}