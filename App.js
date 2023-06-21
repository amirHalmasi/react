import TextExpander from "./TextExpander";

export default function App() {
  return (
    <div>
      <TextExpander
        boxStyle={{
          fontSize: "1.1em",
          color: "brown",
          margin: "10px 0",
          direction: "ltr",
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        buttonStyle={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          fontSize: ".9em",
          color: "blue",
          border: "1px solid #adc1f7",
          borderRadius: "5px",
          backgroundColor: "#e1e7f7",
          padding: "0 5px",
          margin: "0 5px",
        }}
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="نمایش متن"
        collapseButtonText="نمایش کمتر"
        buttonStyle={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",

          fontSize: ".9em",
          fontFamily: "Nazanin",
          fontWeight: "bolder",
          color: "blue",
          border: "1px solid #adc1f7",
          borderRadius: "5px",
          backgroundColor: "#e1e7f7",
          padding: "0 5px",
          margin: "0 5px",
        }}
        boxStyle={{
          fontSize: "1.1em",
          fontFamily: "Nazanin",
          fontWeight: "bolder",
          color: "#0637ba",
          margin: "10px 0",
          direction: "rtl",
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        سفر فضایی نیازمند برخی فناوری‌های شگفت‌انگیز است همکاری بین کشورها، شرکت
        های خصوصی و بین المللی سازمان های فضایی و در حالی که همیشه آسان (یا
        ارزان) نیست، نتایج خارج از این دنیاست به اولین باری که انسان ها پا
        گذاشتند فکر کنید پا روی ماه یا زمانی که مریخ نوردها برای پرسه زدن در
        مریخ فرستاده شدند.
      </TextExpander>

      <TextExpander
        expanded={true}
        boxStyle={{
          fontSize: "1.1em",

          color: "#0637ba",
          margin: "10px 0",
          direction: "ltr",
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        buttonStyle={{
          fontSize: ".9em",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          color: "blue",
          border: "1px solid #adc1f7",
          borderRadius: "5px",
          backgroundColor: "#e1e7f7",
          padding: "0 5px",
          margin: "0 5px",
        }}
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}
