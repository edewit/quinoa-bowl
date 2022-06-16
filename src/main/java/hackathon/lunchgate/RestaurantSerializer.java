package hackathon.lunchgate;

import java.io.IOException;
import java.io.UncheckedIOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class RestaurantSerializer extends StdSerializer<Restaurant> {

	public RestaurantSerializer() {
		this(null, false);
	}

	public RestaurantSerializer(Class<?> t, boolean dummy) {
		super(t, dummy);
	}

	@Override
	public void serialize(Restaurant value, JsonGenerator gen, SerializerProvider provider) throws IOException {

		gen.writeStartObject();
		gen.writeNumberField("id", value.id);
		gen.writeStringField("realName", value.realName);
		gen.writeStringField("phone", value.phone);
		gen.writeStringField("homepage", value.homepage);
		gen.writeArrayFieldStart("menues");
		if (value.menu != null) {
			value.menu.values().forEach(m -> {
				try {
					gen.writeObject(m);
				} catch (IOException e) {
					throw new UncheckedIOException(e);
				}
			});
		}
		gen.writeEndArray();
		gen.writeEndObject();
	}
}
