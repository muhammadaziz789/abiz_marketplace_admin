import { Button } from "antd";
import { Component, ErrorInfo, ReactNode } from "react";
// import { CButton } from "../components/Buttons";
// import { CErrorIcon } from "../components/IconGenerator/Svg";

interface ErrorBoundaryProps {
  children: ReactNode; // Correctly typing the children prop
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ hasError: true, error });
    console.error(error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex items-center flex-col text-center text-[var(--black)] mt-20">
          <h1 className="text-3xl flex space-x-2 font-medium">
            {/* <CErrorIcon fill="red" /> */}
            <span>Xatolik yuz berdi!</span>
          </h1>
          <p className="text-[var(--gray)] mt-5 mb-10">
            Error: {this.state.error && this.state.error.toString()}
          </p>
          <Button
            onClick={() => (location.href = "/")}
            className="border border-[var(--border)]"
          >
            Bosh sahifaga qaytish
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
