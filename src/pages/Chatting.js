import React from 'react';
import { Link } from 'react-router-dom';
import Per1Talk from '../components/Per1Talk';

function Chatting() {
	return (
		<div className="">
      <Link to='person2'>
      <Per1Talk
				image="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVwoq6_FXZsl1FyhsMWQNwOWdaZ5QMswdLTJzN75j-Kmcw&oe=634AB03B"
				name="Muhammad Hassan"
				text="1 in"
				time="Yesterday  10:20 am"
			/>
      </Link>
		<Link to='person4'>
  
			<Per1Talk
				image="https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVxjJhp8YUxxUxoSaC4HxdlWe_2E6zY1eGxUMOSR0eSgnw&oe=634BD6A1"
				name="Zubair Butt"
				text="1 checkin"
				time="Yesterday  10:32 am"
			/>
        </Link>	

        <Link to='person1'>

			<Per1Talk
				image="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?ccb=11-4&oh=01_AVwcXY92DG5GTl_qiYxpV2pR-5lpIPj3_JEhakx8pDHxGg&oe=6353951F"
				name="Hassan Mujtaba"
				text="1 checkin"
				time="Yesterday  11:02 am"
			/>
      </Link>

			<Per1Talk
				image="https://media-exp1.licdn.com/dms/image/C4D03AQGibHlpYCxNJg/profile-displayphoto-shrink_100_100/0/1653766940995?e=1670457600&v=beta&t=fcOLOfJhZpJgvz3QwJ-Z6mpQGm16zFSpvZHPE9QL1mI"
				name="Muhammad Ali"
				text="1 checkin"
				time="Yesterday  11:14 am"
			/>
        <Link to='person3'>

			<Per1Talk
				image="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
				name="Muhammad Mohsin"
				text="1 in"
				time="Yesterday  11: 21 am"
			/>

      </Link>

      <Link to='person5'>
      <Per1Talk
				image="https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM"
				name="Shaista Kalsoom"
				text="1 in"
				time="Yesterday  11:39 am"
			/></Link>
			
			<Per1Talk
				image="https://media-exp1.licdn.com/dms/image/C5603AQERH2ST81M1HA/profile-displayphoto-shrink_100_100/0/1596567217523?e=1666828800&v=beta&t=srEpS3_qIgVbPhg-eRT8c9QCCov4vL1whnqLidY86i0"
				name="Muammad Haris"
				text="1 checkin"
				time="Yesterday  11:52 am"
			/>
		</div>
	);
}

export default Chatting;
