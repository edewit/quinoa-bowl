package hackathon.lunchgate;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Menu {

	public String title;
	public String shortTitle;
	public String category;
	//public Double price;
}
