package hackathon.lunchgate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Menu {

	public String title;
	public String category;
	//@JsonProperty(name = "price",def)
	public Object price;
}
