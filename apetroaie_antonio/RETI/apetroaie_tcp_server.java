import java.net.*;
import java.io.*;

public class apetroaie_tcp_server{
    public static void main(String[] args) {
        ServerSocket serverSocket;
        Socket clientSocket;
        
        if (args.length != 1) {
            System.out.println("Usage: java EchoServer <PORT>");
            return;
        }
        
        int port = Integer.parseInt(args[0]);
        
        try {
            serverSocket = new ServerSocket(port);
            System.out.println("TCP Echo Server is ready and listening on port " + port + "\n");    
            
            while (true) {
                clientSocket = serverSocket.accept();
                System.out.println("Client connected: " + clientSocket.getInetAddress().getHostAddress());

                // Create input and output streams
                InputStream input = clientSocket.getInputStream();
                OutputStream output = clientSocket.getOutputStream();

                BufferedReader reader = new BufferedReader(new InputStreamReader(input));
                PrintWriter writer = new PrintWriter(output, true);

                String message;
                while ((message = reader.readLine()) != null) {
                    System.out.println("Received message from client: " + message);

                    // Echo the message back to the client
                    writer.println(message);
                }

                // Close the connection
                clientSocket.close();
                System.out.println("Client disconnected.\n");
            }
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
