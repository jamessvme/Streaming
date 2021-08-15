<script>
	import Flex from "$lib/Containers/Flex.svelte";
	import TrapZ from "$lib/svg/Trapezoid.svelte";

	const Logo = {
		fill:'url( #Lin )',
		points: [
			[-100, 0], 
			[-50, 90], 
			[50, 90], 
			[100, 0]
		]
	}
	const LogoInnerRight = {
		fill:'url( #Edges )',
		points: [
			[ -100, 0 ], 
			[ -50, 90 ], 
			[ 50, 90 ], 
			[ 100, 0 ]
		]
	}
	const LogoInnerLeft = {
		fill:'url( #Edges2 )',
		points: [
			[ -100, 0 ], 
			[ -50, 90 ], 
			[ 50, 90 ], 
			[ 100, 0 ]
		]
	}
	/*
	const LeftLink = {
		fill:'url( #Lin )',		
		points: [
			[-200, 80], 
			[-150, 15], 
			[-50, 15], 
			[0, 80]
		]
	}
	const LeftInner = {
		fill:'url( #Edges2 )',
		points: [
			[-200, 80], 
			[-150, 15], 
			[-50, 15], 
			[0, 80]
		]
	}
	const RightLink = {
		fill:'url( #Lin )',		
		points: [
			[200, 80], 
			[150, 15], 
			[50, 15], 
			[0, 80]
		]
	}
	const RightInner = {
		fill:'url( #Edges )',
		points: [
			[200, 80], 
			[150, 15], 
			[50, 15], 
			[0, 80]
		]
	}

	 */
</script>
<Flex props={{ list:1, center:true}}>
	<svg viewBox="-200 0 400 90" height=100% xmlns:svg="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id=Edges x1=0 x2=.9 y1=0 y2=.8>
				<stop offset="75%" stop-opacity='0%' stop-color='var( --purple )'/>
				<stop offset="85%" stop-opacity='35%' stop-color='var( --purple )'/>
				<stop offset="115%" stop-opacity='10%' stop-color='var( --pink )'/>
			</linearGradient>
			<linearGradient id=Edges2 x1=.7 x2=0 y1=0 y2=.6>
				<stop offset="75%" stop-opacity='0%' stop-color='var( --purple )'/>
				<stop offset="85%" stop-opacity='35%' stop-color='var( --purple )'/>
				<stop offset="115%" stop-opacity='10%' stop-color='var( --pink )'/>
			</linearGradient>
			<linearGradient id=Lin x1=0 x2=0 y1=0 y2=1>
				<stop offset="75%" stop-opacity='100%' stop-color='var( --purple )'/>
				<stop offset="85%" stop-opacity='85%' stop-color='var( --purple )'/>
				<stop offset="100%" stop-opacity='15%' stop-color='var( --pink )'/>
			</linearGradient>
			<linearGradient id="IceGra" x1="24.6" x2="37.4" y1="15.4" y2="55.4" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
				<stop stop-color="var(--white)" offset="0"/>
				<stop stop-color="var(--blue)" offset="1"/>
			</linearGradient>
		</defs>
		<!--
		<a href=#Install>
			<TrapZ data={ LeftLink } >
				<TrapZ data={ LeftInner }>
					<text x='-120' y='53' class='heading2' text-anchor=middle fill='url( #IceGra )'>Install</text>
				</TrapZ>
			</TrapZ>
		</a>
		<a href=./docs>
			<TrapZ data={ RightLink }>
				<TrapZ data={ RightInner }>
					<text x='120' y='53' class='heading2' text-anchor=middle fill='url( #IceGra )'>Docs</text>
				</TrapZ>
			</TrapZ>
		</a>
		-->
		<a href=#Home>
			<TrapZ data={ Logo }>
				<TrapZ data={ LogoInnerLeft }>
					<TrapZ data={ LogoInnerRight }>
						<text class='heading' x='0' y='50' text-anchor=middle fill='url( #IceGra )'>Flogram</text>
					</TrapZ>
				</TrapZ>
			</TrapZ>
		</a>
	</svg>
</Flex>
