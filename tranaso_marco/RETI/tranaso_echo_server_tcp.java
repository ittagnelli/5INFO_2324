import java.net.*;
import java.io.*;
import java.util.Date;

public class tranaso_tcp_server {
    public static void main(String[] args) {
        ServerSocket server_socket;
        Socket client_connection;

        /* Verifico la presenza del parametro porta e lo leggo */
        if (args.length != 1) {
            System.out.println("uso: tcp_server <PORT>");
            return;
        }
        int port = Integer.parseInt(args[0]);

        try {
            /* creo il socket */
            server_socket = new ServerSocket(port);
            System.out.println("Server TCP pronto e in ascolto sulla porta  " + port + "\n");
            while (true) {
                /* rimango in attesa fino a quando arriva una richiesta da un client */
                client_connection = server_socket.accept();

                System.out.format("Inviato %d bytes con successo\n", args[0].length());
                /* gestisco la connessione e leggo il messagrver_socket;
        Socket client_connectiogio */
                InputStream input = client_connection.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(input));
                String messaggio = reader.readLine();

                System.out.format("Java TCP server ha ricevuto %d byte: %s\n", messaggio.length(), messaggio);

                System.out.format("%s", args[0]);
                // mi preparo ad inviare un messaggio al server
                OutputStream output = client_connection.getOutputStream();
                PrintWriter writer = new PrintWriter(output, true);
                writer.println(messaggio);

                /* chiudo la connessione con il client */
                client_connection.close();
            }
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}