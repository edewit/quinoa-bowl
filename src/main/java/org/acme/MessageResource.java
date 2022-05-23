package org.acme;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.ws.rs.*;
import java.util.*;

@Path("/api/messages")
@Produces(APPLICATION_JSON)
@Consumes(APPLICATION_JSON)
public class MessageResource {

    private Set<Message> messages = Collections.newSetFromMap(Collections.synchronizedMap(new LinkedHashMap<>()));

    public MessageResource() {
        messages.add(new Message(1L, "Matt Chorsey", "New event: Trip to Vegas", "9:32 AM"));
        messages.add(new Message(2L, "Lauren Ruthford", "Long time no chat", "6:12 AM"));
        messages.add(new Message(3L, "Jordan Firth", "Report Results", "4:55 AM"));
        messages.add(new Message(4L, "Bill Thomas", "The situation", "Yesterday"));
        messages.add(new Message(5L, "Joanne Pollan", "Updated invitation: Swim lessons", "Yesterday"));
        messages.add(new Message(6L, "Andrea Cornerston", "Last minute ask", "Yesterday"));
        messages.add(new Message(7L, "Moe Chamont", "Family Calendar - Version 1", "Last Week"));
        messages.add(new Message(8L, "Kelly Richardson", "Placeholder Headhots", "Last Week"));
    }

    @GET
    public Set<Message> list() {
        return messages;
    }

    @GET
    @Path("/{id}")
    public Message get(@PathParam("id") Long id) {
        final Optional<Message> optionalMessage = messages.stream().filter(m -> Objects.equals(m.getId(), id)).findFirst();
        if (optionalMessage.isEmpty()) {
            throw new NotFoundException("Unknown message with id: " + id);
        }
        return optionalMessage.get();
    }
}
