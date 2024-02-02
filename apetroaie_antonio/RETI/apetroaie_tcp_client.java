import java.net.*;
import java.io.*;

public class apetroaie_tcp_client {
    public static void main(String[] args) {
        Socket clientSocket;

        if (args.length != 3) {
            System.out.println("Usage: java EchoClient <IP> <port> <message>");
            return;
        }

        String ip = args[0];
        int tcpPort = Integer.parseInt(args[1]);
        String messageToSend = args[2];

        try {
            clientSocket = new Socket(ip, tcpPort);
            System.out.format("Connected to server %s on port %d\n", ip, tcpPort);

            // Prepare to send a message to the server
            OutputStream output = clientSocket.getOutputStream();
            PrintWriter writer = new PrintWriter(output, true);
            writer.println(messageToSend);

            System.out.format("Sent %d bytes successfully\n", messageToSend.length());

            // Receive and print the echo message from the server
            InputStream input = clientSocket.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(input));
            String echoMessage = reader.readLine();

            System.out.format("Received from server: %s\n", echoMessage);

            // Close the connection
            clientSocket.close();
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
