import React,{Component} from 'react';
import BigBangStarField from 'react-big-bang-star-field';
class StarsField extends Component
{
	render()
	{
		return(
				<>
					<BigBangStarField   numStars={1000}
			        maxStarSpeed={-1}
			        scale={1}
			        style={{
			            position: 'absolute',
			            width: '100%',
			            height: '100%'
			          }}
			        starColor={"255, 255, 255"} />
				</>
			)
	}
}
export default StarsField;