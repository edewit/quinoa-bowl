package hackathon.lunchgate;

import java.io.IOException;
import java.io.UncheckedIOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class MenuesSerializer extends StdSerializer<Menues> {

	public MenuesSerializer() {
		this(null, false);
	}
	
	public MenuesSerializer(Class<?> t, boolean dummy) {
		super(t, dummy);
	}

	@Override
	public void serialize(Menues value, JsonGenerator gen, SerializerProvider provider) throws IOException {

		gen.writeStartArray();
		value.menues.values().forEach(r -> {
			try {
				gen.writeObject(r);
			} catch (IOException e) {
				throw new UncheckedIOException(e);
			}
		});
		gen.writeEndArray();
	}
}
