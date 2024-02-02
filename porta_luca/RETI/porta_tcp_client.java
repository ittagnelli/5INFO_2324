import java.io.*;
import java.net.*;

public class porta_tcp_client {
    public static void main(String[] args) {
        Socket client_socket;

   
        if (args.length != 2) {
            System.out.println("uso: tcp_client <INDIRIZZO> <PORTA>");
            return;
        }
        String address = args[0];
        int port = Integer.parseInt(args[1]);

        try {
       
            client_socket = new Socket(address, port);
            System.out.println("Client TCP connesso a " + address + ":" + port);

   
            System.out.println("Inserisci un messaggio per inviarlo al server: ");
            BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
            String messaggio = input.readLine();

            OutputStream output = client_socket.getOutputStream();
            PrintWriter writer = new PrintWriter(output, true);
            writer.println(messaggio);

           
            InputStream input_server = client_socket.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(input_server));
            String messaggio_server = reader.readLine();

          
            System.out.println("Messaggio ricevuto dal server: " + messaggio_server);

          
            client_socket.close();
        }
        catch (IOException e) {
            System.err.println(e);
        }
    }
}
