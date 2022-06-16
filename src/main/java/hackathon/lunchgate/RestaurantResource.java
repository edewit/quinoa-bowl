package hackathon.lunchgate;


import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.jboss.resteasy.reactive.RestQuery;

import io.smallrye.common.annotation.Blocking;

@Path("/api/restaurant")
public class RestaurantResource {

	 @RestClient
	 RestaurantService lunchGate;

	    @GET
	    @Path("list")
	    @Blocking
	    public Restaurants list(@RestQuery String latitude, @RestQuery String longitude) {
	        return lunchGate.list(null, null, "de", "json", latitude, longitude);
	    }
	    
	    
}