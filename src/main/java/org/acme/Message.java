package org.acme;

public class Message {

    private Long id;

    private String fromName;
    private String subject;
    private String date;

    public Message(Long id, String fromName, String subject, String date) {
        this.id = id;
        this.fromName = fromName;
        this.subject = subject;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}
