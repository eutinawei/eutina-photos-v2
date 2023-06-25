import { keyframes } from 'styled-components'

export const Glitch = keyframes`
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
`

export const GlitchTop = keyframes`
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
`

export const GlitchBottom = keyframes`
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
`

export const GlitchImage = keyframes`
  0%{
    opacity: 0.5;
    background-position: 0 0;
    filter:hue-rotate(0deg);
	}
	10%{
	  background-position: 5px 0;
	}
	20%{
	  background-position: -5px 0;
	}
	30%{
	  background-position: 15px 0;
	}
	40%{
	  background-position: 5px 0;
	}
	50%{
	  background-position: -25px 0;
	}
	60%{
	  background-position: -50px 0;
	}
	70%{
	  background-position: 0 -20px;
	}
	80%{
	  background-position: -60px -20px;
	}
	81%{
	  background-position: 0 0;
	}
  99%{
    opacity: 0.5;
  }
	100%{
    opacity: 0;
	  background-position: 0 0;
	  filter:hue-rotate(360deg);
	}
`
