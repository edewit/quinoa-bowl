package hackathon.lunchgate;


import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.eclipse.microprofile.rest.client.annotation.ClientHeaderParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import io.smallrye.common.annotation.Blocking;

@Path("/restaurant")
@RegisterRestClient
@ClientHeaderParam(name = "Authorization", value = "{lookupAuth}")
public class RestaurantResource {

	 @RestClient
	 RestaurantService lunchGate;

	    @GET
	    @Path("list")
	    @Blocking
	    public Restaurants list() {
	        return lunchGate.list("zurich", "CH", "de", "json");
	    }
}