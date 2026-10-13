## Poisson manifolds 

A *Poisson manifold* $(M, \{\ , \ \})$ is a smooth manifold $M$ equipped with a skew-symmetric bilinear map 
$$
\{\, · \,, \,·\,\}: V × V → V, \qquad \text{where} \quad V = C^∞(M),
$$ 
called a *Poisson bracket*, such that $(V, \{\, · \,, \,·\,\})\, {}$ is a Lie algebra and $\ \{f, \, ·\, \}\ {}$ is a derivation $\ \forall\ f ∈ V$, i.e. 
$$
\{f, gh\} = \{f, g\}h + g\{f, h\}.
$$
<Spacer size="5px"/>

***Examples:*** $M = \R^n \times \R^n$, with Poisson bracket
$$
\{f, g\} :=
%\frac {\partial f}{\partial \xv}^T \frac {\partial g}{\partial \yv} - \frac {\partial g}{\partial \xv}^T \frac {\partial f}{\partial \yv} 
\sum_{𝑖=1}^n \frac {∂f}{∂x_𝑖} \frac {∂g}{∂y_𝑖} − \frac {∂g}{∂x_𝑖} \frac {∂f}{∂y_𝑖}
$$

$M = \R^3$, with Poisson bracket
$$
\{f, g\}(\xv) := \xv^T (\nabla f(\xv) \times \nabla g(\xv)).
$$

---

### The Lie-Poisson bracket of the dual $\fg^*$ of a reflexive Lie algebra

Let $φ: \fg \to (\fg^*)^* \subset V = C^∞(\fg^*)\, {}$ denote the isomorphism (for reflexive $\fg$) 
$$
φ(ξ)(\mu) := \mu(ξ) \qquad \forall \ \xi \in \fg, \mu \in \fg^*.
$$

The *Lie-Poisson bracket* on $V$ is defined as
$$
\{f, g\}_\pm(\mu) := \pm \mu \lp \left [\fd f \mu(\mu), \fd g \mu(\mu) \right ] \rp,
$$
where $\, \fd f \mu: \fg^* → \fg\, {}$ is given by
$$
\fd f \mu(\mu) := φ^{-1}(d f(\mu)),
$$
i.e.
$$
\nu(\fd f \mu(\mu)) = \smallfrac {d \ }{d \epsilon} f (\mu + \epsilon \, \nu) |_{\epsilon = 0} \qquad \forall \ \mu, \nu \in \fg^*.
$$
<Spacer size="1px"/>

In many applications, the $\pm$ sign is related to left or right trivialization of $T^*G$. 

<!--
---

*Note:* On function spaces, non-reflexivity is often due to integration by parts: 
inner products typically involve integrals of pointwise inner products over the domain;
extraction of $\, \fd f \mu\,$ from the directional derivative involves integration by parts,
which introduces boundary terms.
$~$
Rather than verifying 'bare hands' that the Lie-Poisson bracket is a Poisson bracket,i
  we'll show (later!) that its ancestry guarantees that it is a Poisson bracket. 

Specifically, Lie-Poisson brackets arise from trivializations of $T^*G$, and the canonical symplectic structure on a contangent bundle.

-->
---

### Another pair of (anti)homomorphic Lie algebras: $\fg$ and $C^∞(\fg^*)$

The isomorphism $φ: \fg \to (\fg^*)^*$ for reflexive $\fg$ 
$$
φ(ξ)(\mu) = \mu(ξ) \qquad \forall \ \xi \in \fg, \mu \in \fg^*.
$$
is a Lie algebra (anti)homorphism from $\fg$ to $C^∞(\fg^*)$ with the Lie-Poisson bracket: 
$$
φ([ξ,ζ]) = \pm \{φ(ξ), φ(ζ)\}_\pm.
$$

*Verify:* 
Linearity of $φ \ \ \Longrightarrow \ \ {\displaystyle \fd {φ(ξ)} \mu(\mu) = ξ}$.
<!-- Given $\xi \in \fg$ and $\mu, \nu \in \fg^*$,
$$
\eqa{
\nu(\fd {φ(ξ)} \mu(\mu)) &= \dep{φ(ξ)(\mu + \epsilon \, \nu)} \phantom{\sum}\\
&= \dep{(\mu + \epsilon \, \nu)(ξ)} \phantom{\sum}\\
&= \dep{\mu(ξ) + \epsilon \, \nu(ξ)} \phantom{\sum}\\
&= \nu(ξ)
}
$$
-->

Hence
$$
\eqa{
φ([ξ,ζ])(\mu) &= \mu([ξ,ζ]) \phantom{\sum} \\
&= \mu \lp\left [ \fd {φ(ξ)} \mu(\mu), \fd {φ(ζ)} \mu(\mu) \right ] \rp \phantom{\sum}\\
&= \pm \{φ(ξ), φ(ζ)\}_\pm(\mu).
}
$$


---

### Hamiltonian vector fields on Poisson manifolds

In finite dimensions, the space of derivations on $C^∞(M)$ is isomorphic to $\, \cXM$.

Hence $\ \{\, ·\,,\, ·\, \}\, {}$ determines a map $\ X: C^∞(M) \to \cXM\ {}$ satisfying
$$
X_h(f) = \{f, h \} 
$$
and
$$ 
(X_h(f))(p) = ({\cal L}_{X_h}f)(p) = df(p)(X_h(p))
$$
for all smooth functions $f$ and $h$.
<Spacer size="5px"/>

$X_h$ is called the *Hamiltonian vector field* associated to the *Hamiltonian* $h$, and the first order ODE
$$
\dot p = \smallfrac {dp}{dt} = X_h(p)
$$
is called *Hamilton's equation*. 

---

#### Hamiltonian vector fields on $\fg^*$ determined by the Lie-Poisson structure 

***Claim:*** Given $h \in C^\infty(\fg^*)$, 
$$
X_h(\mu) = \mp \ad^*_{\fd h \mu(\mu)}\mu.
$$
<Spacer size="5px"/>

*Verify:* $X_h$ satisfies
$$
\eqa{
X_h(f)(\mu) &= \{f, h\}_\pm(\mu) \phantom{\sum} \\
&= \pm \mu \lp \left [ \fd f \mu(\mu), \fd h \mu(\mu)\right ] \rp \phantom{\sum} \\
&= \mp \ad^*_{\fd h \mu(\mu)}\lp \fd f \mu(\mu) \rp \phantom{\sum}\\
&= \mp df(\mu) \lp \ad^*_{\fd h \mu(\mu)}\mu\rp
}
$$
for any $f \in C^\infty(\fg^*)$.

---

#### The Euler-Arnold equation is Hamiltonian

***Claim:*** Hamilton's equation for the Lie-Poisson structure on $\fg^*$ and Hamiltonian 
$$
h(\mu) := \half \mu \lp \mathbb{I}^{-1} \mu \rp, 
$$
is the [Euler-Arnold equation](euler-arnold)
$$
\dot \mu = \mp \ad^*_\xi \mu, \qquad \text{where} \qquad \xi = \mathbb{I}^{-1} \mu .
$$

*Verify:* $\mathbb{I}$ symmetric $\ \ \Longrightarrow$
$$
\eqa{
dh(\mu)(\nu) &= \dep{h(\mu + \epsilon \, \nu)} \phantom{\sum}\\
&= \dep{\lp h(\mu) 
+ \smallfrac \epsilon 2 \lp \nu(\mathbb{I}^{-1} \mu) + \mu(\mathbb{I}^{-1} \nu) \rp
+ \epsilon^2 h(\nu) \rp} \phantom{\sum}\\
&= \nu(\mathbb{I}^{-1} \mu)
}
$$
$\Longrightarrow \ \ \fd h \mu(\mu) = \mathbb{I}^{-1} \mu$

$\Longrightarrow \ \ X_h(\mu) = \mp \ad^*_{\mathbb{I}^{-1} \mu} \mu$.

---

### Brackets to brackets

<!--  a skew-symmetric bilinear map 
$$
\{\, · \,, \,·\,\}: V × V → V, \qquad \text{where} \quad V = C^∞(M),
$$ 
such that $\ X_f \{\, ·\, , f \}\ {}$ is a derivation $\ \forall\ f ∈ V$ 
--> 

***Claim:*** A smooth manifold $M$ with 
a linear map $f \mapsto X_f$ from $C^∞(M)$ to $\calX(M)$ is a Poisson manifold <br/>with bracket $\{f, h\} = X_h(f)\quad  \Longleftrightarrow \quad f \mapsto X_f$ is a Lie algebra antihomorphism. 
<Spacer size="1px"/>
<!--
i.e. 
$$
 X_{\{f,g\}}(h) = - [X_f , X_g](h) % \qquad \quad \forall \ k \in C^∞(M).
$$
for all $f, g, h \in C^∞(M)$.
-->

*Verify:* If $\{\, ·\, ,\, ·\, \}\, {}$ is a Poisson bracket, 
$$
\{\{g, h\}, f \} =  X_f(\{g, h\}) =  X_f(X_h(g))
$$
and the Jacobi identity $\ \ \Longrightarrow$
$$
\eqa{
0 &= \textcolor{red}{\{\underbrace{\{f, g\}}_{-\{g, f\}}, h\}} + \textcolor{blue}{\{\{g, h\}, f\}} + \textcolor{green}{\underbrace{\{\{h, f \}, g\}}_{\{g, \{f, h \}\}} }\phantom{\sum} \\
&= \textcolor{red}{- X_h(X_f(g))} + \textcolor{blue}{X_f(X_h(g))} + \textcolor{green}{X_{\{f, h\}}(g)}  \phantom{\sum} \\
&= \textcolor{purple}{[X_f , X_h](g)} + \textcolor{green}{X_{\{f, h\}}(g)}
}
$$
$\Longrightarrow \ \ X_{\{f, h\}} = - [X_f , X_h]$.
<!-- for all $\, f, g, h ∈ V$.-->

---

#### Second slide of brackets to brackets

On the other hand, if $f \mapsto X_f$ is a Lie algebra antihomorphism, $\{\, ·\, ,\, ·\, \}$ must be skew symmetric. 
<Spacer size="5px"/>

$X_h$ is a derivation, so 
$$
\eqa{
\{ f \, g, h \} &= X_h(f \, g) \phantom{\sum}\\
&= (X_h(f))g + f (X_h(g)) \{ f \, g, h \} \phantom{\sum}\\
&= \{ f , h \} \, g + f \{ g, h \},
}
$$
and hence $\{ \, \cdot \, , h\}$ is a derivation.
<Spacer size="5px"/>

Reversing the chain of equalities from the previous slide shows $\{\, ·\, ,\, ·\, \}$ satisfies the Jacobi identity and hence is a Lie bracket.

---

### Conserved quantities of Hamiltonian systems

***Claim:*** If $X_h$ is a Hamiltonian vector field and $\, \calF_t$ is the flow at time $t$ of $X_h$, 
$$
\calF_t^*h = h \circ \calF_t = h 
$$
for all $t$ for which $\, \calF_t\, {}$ is defined.

*Verify:* $\calF_0 = \text{id}_M, \ {}$ so the equality holds for $\ t = 0$.

Skew-symmetry of $\ \{\, ·\, , \,·\,\} \ \Longrightarrow \ \{h, h \} = 0, \ {}$

$\Longrightarrow$
$$
\eqa{
\smallfrac {d \ }{dt} \calF_t^*h &= X_h(h) \circ \calF_t \\
& = \{h, h \}\circ \calF_t \\
&= 0,
}
$$
so $\calF_t^*h = h$ for all $t$ for which the flow is defined.

---

### Casimirs: functions conserved by any Hamiltonian system

If $M$ is a Poisson manifold, the nonconstant elements of the kernel of $f \mapsto X_f$, i.e. the nonconstant smooth functions
$C$ satisfying $\ \{C, \, \cdot \, \} = 0, \ {}$ are called *Casimirs*.
<Spacer size="5px"/>

***Claim:*** Casimirs are invariant under pullback by the flow $\calF_t$ of any Hamiltonian vector field on $M$:   
$$
C = \calF_t^* C = C \circ \calF_t.
$$
$\Longrightarrow \ \ {}$ trajectories of the Hamiltonian system remain on the intersections of level sets of Casimirs.
<Spacer size="5px"/>

*Verify:* In-class exercise. <br/> 
Hint: Given a Casimir $C$ and point $p \in M$, set $p(t) := \calF_t(p)$ and compute $\frac {d \ }{dt}C(p(t))$.

<!--

$$
\frac {d \ }{dt}C(p(t)) = dC(p(t))(X_h(p(t)))
= X_h(C)(p(t))
= \{C, h\}(p(t))
= 0.
$$

-->

---

#### Example: $\Ad^*$-invariant functions are Casimirs of the Lie-Poisson bracket on $\fg^*$

For notational tidiness, consider the handedness yielding
$$
X_f(\mu) = \ad^*_{\fd f \mu(\mu)} \mu.
$$

If we identify $T_\mu \fg^*$ with $\fg^*$, then for $\eta \in \fg$,
$$
\eqa{
X_f(\mu)(\eta) &= \ad^*_{\fd f \mu(\mu)} \mu(\eta) \phantom{\sum} \\
&= \mu \lp \left [ \fd f \mu(\mu), \eta \right ] \rp \phantom{\sum} \\ 
&= - \ad^*_\eta \mu \lp \fd f \mu(\mu) \rp \phantom{\sum} \\ 
&= - df(\mu) \lp \ad^*_\eta \mu \rp \phantom{\sum} \\ 
&= \dep{f \lp \Ad^*_{\exp(\epsilon \, \eta)^{-1}} \mu \rp}.
}
$$

Hence $f$ $\Ad^*$-invariant $\ \ \Longrightarrow \ \ X_f(\mu)(\eta) = 0$.

<!--

---

### Poisson maps

A map $\,φ: M → N\,{}$ between Poisson manifolds is a *Poisson map* if the pull-back
<br/>
$φ^∗: C^∞(N) → C^∞(M)\,{}$ preserves the Poisson brackets, i.e.
 $$
\{ f, g\}_N \circ φ = \{f \circ φ, g \circ φ \}_M \qquad \forall \ f, g ∈ C^∞(N).
$$
<Spacer size="5px"/>

***Claim:***  The time $t$ flow $\, {\cal F}_t\, {}$ of a Hamiltonian vector field $X_h$ is a Poisson map.

Informal exercise: Prove this. 

-->