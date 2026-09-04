---
marp: false
---

## Spherical harmonics exercises

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\ev}{\mathbf{e}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\wv}{\mathbf{w}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
%\newcommand{\R}{\mathbb{R}}
%\newcommand{\N}{\mathbb{N}}
%\newcommand{\Z}{\mathbb{Z}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$***Goal: Stay as low-tech as possible while avoiding coordinate calculations***

Let $M = \R^3 - \triv$ and $V = C^\infty(M, \C)$. Let $G = SO(3, \R)$ act on $M$ via the usual matrix-vector multiplication, and $\R^+$ act on $M$ by scalar multiplication, i.e. $s \cdot \pv = s \, \pv$. Note that the $G$ and $\R^+$ actions commute. Let $G$ and $\R^+$ act on $V$ via the standard representations induced by their actions on $M$.

Identify evaluations of the infinitesimal generators on $V$ with elements of $V$. What is the relationship between the infinitesimal generators of the actions on $V$ and Lie differentation with respect to the infinitesimal generators of the actions on $M$? 

What equivariance relationships hold for the infinitesimal generators? (Use the general recipe for pullbacks of infinitesimal generators of $G$ by $\rho(g)$ that involves $\text{Ad}_g$, and the fact that the $G= SO(3, \R)$ and $\R^+$ actions on $M$ commute.)

Show that the space of $\R^+$-invariant elements of $V$ is isomorphic to $W = C^\infty(S^2, \C)$, giving an explicit formula for the $\R^+$-invariant isomorphism $\phi: W \to V$.

Given $f \in V$, define $\ H_f: M \to gl(3, \C)\ {}$ by 
$$
\wv^T H_f(\pv) \vv := \smallfrac {d^2 }{d s dt} f(\pv + s \, \vv + t \, \wv)|_{s = t = 0} \qquad \quad \forall \ \pv \in M, \ \vv, \wv \in \R^3.
$$
$H_f(\pv)$ is the Hessian of $f$ at $\pv$ (set $\vv$ and $\wv$ equal to arbitrary Euclidean basis vectors), and hence 
$$
\Delta f(\pv) = \text{trace} \, H_f(\pv) \qquad \quad \forall \ \pv \in M.
$$

Show that 
$$
H_{g \cdot f}(\pv) = g H_f(g^{-1} \pv) g^{-1}  \qquad \quad \forall \ g \in G, \ \pv \in M,
$$
and hence $\Delta$ is $G$-equivariant.
%$$
%\Delta (g \cdot f)(\pv) = \text{trace} \lp g H_f(g^{-1} \pv) g^{-1} \rp = \Delta f(g^{-1} \pv)
%= (g \cdot \Delta f)(\pv)\qquad \quad \forall \ g \in G, \ \pv \in M,
%$$

Show that
$$
1_M(\pv) = \pv, \qquad  {\cal L}_{1_M} f(\pv) = df(\pv)(\pv)\sands
%\Delta_{\text{rad}} f(\pv) := 
{\cal L}_{1_M} {\cal L}_{1_M} f(\pv) = \pv^T H_f(\pv) \pv + {\cal L}_{1_M} f(\pv). 
$$
Show that ${\cal L}_{1_M}$ is $G$-equivariant.

Given $\xi \in \R^3 \approx so(3, \R), \ {}$ the infinitesimal generator $\xi_M$ satisfies
$$
\xi_M(\pv) = \xi \times \pv = - \hat {\pv} \xi, 
$$

Show that for any $\xi$ and $\eta \in \R^3$,
$$
\eta_V(\xi_V(f))(\pv) = \eta^T S_f(\pv) \xi + df(\pv)(\xi \times (\eta \times \pv)), \qquad \text{where} \qquad S_f(\pv) :=- \hat \pv H_f(\pv) \hat \pv,
%{\cal L}_{\eta_M} {\cal L}_{\xi_M} f(\pv) = \eta^T S_f(\pv) \xi + df(\pv)(\xi \times (\eta \times \pv)), \qquad \text{where} \qquad S_f(\pv) :=
$$
and $\hat \pv$ is the skew-symmetric matrix satisfying $\hat \pv \vv = \pv \times \vv\qquad  \forall \ \vv \in \R^3$.
%and ${\cal L}_{\xi_M} f$ denotes the Lie derivative of $f$ with respect to $\xi_M$. <br>
%*Suggestion:* Use ${\cal L}_{\xi_M} f = \iota_{\xi_M} df$, i.e. 
%$$
%{\cal L}_{\xi_M} f(\pv) = df(\pv)(\xi_M(\pv)) \qquad \quad  \forall \ \pv \in \R^3,
$$
%and take advantage of the fact that $M$ is open in $\R^3$ when evaluating the RHS.

Show that $\tilde \Delta: V \to V$ given by
$$
\tilde \Delta f(\pv) := \text{trace} \, S_f(\pv)
$$ 
is $G$-equivariant.



Using 
$$\xv \times (\xv \times \yv) = - (\xv^T \yv) \xv \qquad \forall \ \xv, \yv \in \R^3,
$$
show that if $\{\ev_1, \ev_2, \ev_3\}$ is an orthonormal basis of $\R^3$, then
$$
- \sum_{j = 1}^3 {\cal L}_{(\ev_j)_M} {\cal L}_{(\ev_j)_M} f
= \tilde \Delta f + {\cal L}_{1_M} f.
$$







