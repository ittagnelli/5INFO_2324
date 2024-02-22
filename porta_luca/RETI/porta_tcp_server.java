import java.net.*;
import java.io.*;
import java.util.Date;

public class porta_tcp_server {
    public static void main(String[] args) {
        ServerSocket server_socket;
        Socket client_connection;

        if (args.length != 1) {
            System.out.println("uso: tcp_server <PORT>");
            return;
        }
        int port = Integer.parseInt(args[0]);

        try {
            
            server_socket = new ServerSocket(port);
            System.out.println("Server TCP pronto e in ascolto sulla porta  " + port  + "\n");

            while(true) {
           
                client_connection = server_socket.accept();

            
                InputStream input = client_connection.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(input));
                String messaggio = reader.readLine();

                System.out.format("Java TCP server ha ricevuto %d byte: %s\n", messaggio.length(), messaggio);

  
                OutputStream output = client_connection.getOutputStream();
                PrintWriter writer = new PrintWriter(output, true);
                writer.println("Messaggio ricevuto dal client: " + messaggio);

              
                if (client_connection != null) {
                    client_connection.close();
                }
            }
        }
        catch (IOException e) {
            System.err.println(e);
        }
    }
}
